<template>
  <nav class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-neutral"
        >
          <li><a>About Me</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact Me</a></li>
        </ul>
      </div>
      <a
        class="btn btn-ghost normal-case text-xl dark:text-primary text-secondary"
        >Josef</a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
    <div class="navbar-end lg:mr-4">
      <ThemeToggleButton />
    </div>
  </nav>
</template>

<script setup></script>
