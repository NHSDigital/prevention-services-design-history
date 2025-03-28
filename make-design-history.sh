#!/bin/bash

# Function to convert service name to hyphenated format
hyphenate() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-'
}

# Function to get current year and month
get_date_folders() {
    local year=$(date +%Y)
    local month=$(date +%m)
    echo "$year/$month"
}

# Function to update product.njk with new service
update_product_njk() {
    local service_name="$1"
    local area="$2"
    local temp_file="temp_product.njk"

    # Create a temporary file
    cp app/_layouts/product.njk "$temp_file"

    # Debug output
    echo "Adding service $service_name to $area section"

    # Find the correct section and add the new service
    if [ "$area" = "Screening" ]; then
        sed -i '' '/title: "Screening", services: \[/,/\]/s/\]/, "'"$service_name"'"\n        ]/' "$temp_file"
    elif [ "$area" = "Vaccinations" ]; then
        sed -i '' '/title: "Vaccinations", services: \[/,/\]/s/\]/, "'"$service_name"'"\n        ]/' "$temp_file"
    elif [ "$area" = "Healthchecks" ]; then
        sed -i '' '/title: "Personalised prevention", services: \[/,/\]/s/\]/, "'"$service_name"'"\n        ]/' "$temp_file"
    fi

    # Debug output
    echo "Checking if service was added..."
    if grep -q "\"$service_name\"" "$temp_file"; then
        echo "Service was successfully added"
    else
        echo "Failed to add service"
        exit 1
    fi

    # Replace the original file
    mv "$temp_file" app/_layouts/product.njk
}

# Function to create the service markdown file
create_service_md() {
    local service_name="$1"
    local hyphenated_name="$2"
    local area="$3"

    # Create the markdown file
    cat > "app/posts/$hyphenated_name.md" << EOF
---
layout: collection
title: $service_name
description: A record of $service_name design work
area: $area
pagination:
  data: collections.$hyphenated_name
  reverse: true
  size: 50
permalink: "$hyphenated_name/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---
EOF
}

# Function to create the service directory and JSON file
create_service_json() {
    local service_name="$1"
    local hyphenated_name="$2"

    # Create directory
    mkdir -p "app/posts/$hyphenated_name"

    # Create JSON file
    cat > "app/posts/$hyphenated_name/$hyphenated_name.json" << EOF
{
  "eleventyNavigation": {
    "parent": "$service_name"
  }
}
EOF
}

# Function to create introduction file
create_introduction_file() {
    local service_name="$1"
    local hyphenated_name="$2"
    local date_folders="$3"
    local date_stamp=$(date +%Y-%m-%d)

    # Create year/month folders
    mkdir -p "app/posts/$hyphenated_name/$date_folders"

    # Create introduction file
    cat > "app/posts/$hyphenated_name/$date_folders/$date_stamp-introduction.md" << EOF
---
layout: post
title: Introduction to $service_name
date: $date_stamp
author: NHS Digital
tags: $hyphenated_name
---

## Overview

This is the introduction to the $service_name design history. Here you'll find a record of our design work and decisions.

## What we're working on

We're currently working on:

- Initial discovery phase
- Understanding user needs
- Exploring potential solutions

## Next steps

Our next steps include:

- Conducting user research
- Creating initial prototypes
- Testing with users
EOF
}

# Function to update eleventy.config.js with new collection
update_eleventy_config() {
    local hyphenated_name="$1"
    local area="$2"
    local temp_file="temp_eleventy.js"

    # Create a temporary file
    cp eleventy.config.js "$temp_file"

    # Debug output
    echo "Adding collection for $hyphenated_name in $area section"

    # Determine which section to add the collection to
    if [ "$area" = "Screening" ]; then
        sed -i '' '/  \/\/ Screening collections/a\
  eleventyConfig.addCollection("'"$hyphenated_name"'", (collection) => {\
    return collection.getFilteredByGlob("app/posts/'"$hyphenated_name"'/**/*.md");\
  });\
\
' "$temp_file"
    elif [ "$area" = "Vaccinations" ]; then
        sed -i '' '/  \/\/ Vaccination collections/a\
  eleventyConfig.addCollection("'"$hyphenated_name"'", (collection) => {\
    return collection.getFilteredByGlob("app/posts/'"$hyphenated_name"'/**/*.md");\
  });\
\
' "$temp_file"
    elif [ "$area" = "Healthchecks" ]; then
        sed -i '' '/  \/\/ Personalised prevention collections/a\
  eleventyConfig.addCollection("'"$hyphenated_name"'", (collection) => {\
    return collection.getFilteredByGlob("app/posts/'"$hyphenated_name"'/**/*.md");\
  });\
\
' "$temp_file"
    fi

    # Debug output
    echo "Checking if collection was added..."
    if grep -q "addCollection(\"$hyphenated_name\"" "$temp_file"; then
        echo "Collection was successfully added"
    else
        echo "Failed to add collection"
        exit 1
    fi

    # Replace the original file
    mv "$temp_file" eleventy.config.js
}

# Main script
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 \"Service Name\" \"Area\""
    echo "Area must be one of: Screening, Vaccinations, or Healthchecks"
    exit 1
fi

SERVICE_NAME="$1"
AREA="$2"

# Validate area
if [[ ! "$AREA" =~ ^(Screening|Vaccinations|Healthchecks)$ ]]; then
    echo "Error: Area must be one of: Screening, Vaccinations, or Healthchecks"
    exit 1
fi

# Convert service name to hyphenated format
HYPHENATED_NAME=$(hyphenate "$SERVICE_NAME")

# Get current year and month for folder structure
DATE_FOLDERS=$(get_date_folders)

# Update product.njk
update_product_njk "$SERVICE_NAME" "$AREA"

# Create service markdown file
create_service_md "$SERVICE_NAME" "$HYPHENATED_NAME" "$AREA"

# Create service directory and JSON file
create_service_json "$SERVICE_NAME" "$HYPHENATED_NAME"

# Create introduction file
create_introduction_file "$SERVICE_NAME" "$HYPHENATED_NAME" "$DATE_FOLDERS"

# Update eleventy.config.js
update_eleventy_config "$HYPHENATED_NAME" "$AREA"

echo "Design history for $SERVICE_NAME has been created successfully!"
echo "Files created:"
echo "- app/posts/$HYPHENATED_NAME.md"
echo "- app/posts/$HYPHENATED_NAME/$HYPHENATED_NAME.json"
echo "- app/posts/$HYPHENATED_NAME/$DATE_FOLDERS/$(date +%Y-%m-%d)-introduction.md"
echo "Updated files:"
echo "- app/_layouts/product.njk"
echo "- eleventy.config.js"
