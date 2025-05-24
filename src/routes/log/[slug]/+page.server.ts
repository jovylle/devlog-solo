// src/routes/log/[slug]/+page.server.ts
import fs from "fs"
import path from "path"
import { error } from "@sveltejs/kit"
import { compile } from "mdsvex"

export async function load({ params }) {
  const slug = params.slug
  const filePath = path.resolve(`content/posts/${slug}.md`)

  if (!fs.existsSync(filePath)) {
    throw error(404, "Post not found")
  }

  const raw = fs.readFileSync(filePath, "utf-8")
  const compiled = await compile(raw, { filename: slug })

  return {
    post: {
      html: compiled.code,
    },
  }
}
