import Angular from "./angular";
import Bootstrap from "./bootstrap";
import FastAPI from "./fastapi";
import Git from "./git";
import GitHub from "./github";
import Instagram from "./instagram";
import JavaScript from "./javascript";
import LinkedIn from "./linkedin";
import Lua from "./lua";
import MongoDB from "./mongodb";
import MySQL from "./mysql";
import NextJS from "./nextjs";
import NodeJS from "./nodejs";
import Python from "./python";
import React from "./react";
import Supabase from "./supabase";
import SQLite from "./sqlite";
import Tailwind from "./tailwind";
import TypeScript from "./typescript";


export const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  angular: Angular,
  bootstrap: Bootstrap,
  fastapi: FastAPI,
  git: Git,
  github: GitHub,
  instagram: Instagram,
  javascript: JavaScript,
  linkedin: LinkedIn,
  lua: Lua,
  mongodb: MongoDB,
  mysql: MySQL,
  nextjs: NextJS,
  nodejs: NodeJS,
  python: Python,
  react: React,
  supabase: Supabase,
  sqlite: SQLite,
  tailwind: Tailwind,
  typescript: TypeScript,
};

// Export individual components
export { Angular, FastAPI, Git, GitHub, Instagram, JavaScript, LinkedIn, MongoDB, MySQL, NextJS, NodeJS, Python, React, Tailwind, TypeScript };