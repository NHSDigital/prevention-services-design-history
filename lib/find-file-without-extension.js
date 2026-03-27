import fs from 'node:fs/promises'
import path from 'node:path'

/**
 * Recursively find the first file without an extension in a directory
 *
 * @param {string} dir - Directory to search
 * @returns {Promise<string|null>} - Path of first file without extension, or null
 */
export async function findFileWithoutExtension(dir) {
  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        // Skip directories starting with underscore (e.g. _layouts, _components)
        if (!entry.name.startsWith('_')) {
          const found = await scan(fullPath)
          if (found) return found
        }
      } else if (entry.isFile()) {
        // Skip hidden files (e.g. .gitkeep)
        if (!entry.name.startsWith('.')) {
          // Check if the file has no extension
          const ext = path.extname(entry.name)
          if (ext === '') {
            return fullPath
          }
        }
      }
    }
    return null
  }

  return scan(dir)
}
