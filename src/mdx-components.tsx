import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    sup: ({ children }) => (
      <sup className='leadine[0] relative -top-[0.5em] align-baseline text-[60%]'>{children}</sup>
    ),
    sub: ({ children }) => (
      <sub className='leadine[0] relative -bottom-[0.25em] align-baseline text-[60%]'>
        {children}
      </sub>
    ),
    b: ({ children }) => <b className='font-extrabold'>{children}</b>,
    em: ({ children }) => (
      <em className='font-serif text-[calc(1em_+_1px)] font-normal italic'>{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote className='relative m-0 mb-7 text-[#6f6f6f] dark:text-[#a0a0a0]'>
        {children}
      </blockquote>
    ),
    p: ({ children }) => (
      <p className='m-0 font-sans text-[16px] leading-7 tracking-normal'>{children}</p>
    ),
    li: ({ children }) => (
      <li className='m-0 font-sans text-[16px] leading-7 tracking-normal'>{children}</li>
    ),
    code: ({ children }) => <code className='mb-7 '>{children}</code>,
    h1: ({ children }) => (
      <h1 className='mb-7 mt-14 font-display text-[16px] font-semibold leading-7'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='mb-7 mt-14 font-display text-[16px] font-semibold leading-7'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='mb-7 mt-14 font-display text-[16px] font-semibold leading-7'>{children}</h3>
    ),
    ...components
  };
}
