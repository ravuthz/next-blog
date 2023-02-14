import fs from 'fs';
import path from 'path';

const root = process.cwd();

const flattenArray = (input: any) =>
  input.reduce(
    (acc: any, item: any) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map = (fn) => (input) => input.map(fn);

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => (extraPath: string) => path.join(prefix, extraPath);

const getAllFilesRecursively = (folder: string) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

export function getFiles(type: string) {
  const prefixPaths = path.join(root, "data", type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file: any) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  );
}
