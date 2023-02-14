"use client";

import Image from 'next/image'
import { MDXRemote } from "next-mdx-remote";

import { ContentPre } from "./ContentPre";
import { ContentLink } from './ContentLink';

export type ContentMarkdownType =  any;

const components = {
  Image,
  a: ContentLink,
  pre: ContentPre,
};

export default function ContentMarkdown(props: ContentMarkdownType) {
  return <MDXRemote {...props} components={components}></MDXRemote>;
}
