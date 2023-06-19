'use client';
import { ArrowIcon, AtIcon, GitHubIcon, InstagramIcon } from './icons';

const SocialCards = () => {
  return (
    <div className='flex flex-col gap-2 md:flex-row'>
      <a
        href='mailto:hello@jorndoescode.lol'
        target='_blank'
        className='flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 hover:dark:bg-neutral-900'>
        <div className='flex items-center'>
          <AtIcon />
          <div className='ml-3'>Email</div>
        </div>
        <ArrowIcon />
      </a>
      <a
        href='https://instagram.com/definitelynotjorn'
        rel='noopener noreferrer'
        target='_blank'
        className='flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 hover:dark:bg-neutral-900'>
        <div className='flex items-center'>
          <InstagramIcon />
          <div className='ml-3'>Instagram</div>
        </div>
        <ArrowIcon />
      </a>
      <a
        href='https://github.com/abcdefghijorngarbosaxyz'
        rel='noopener noreferrer'
        target='_blank'
        className='flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 hover:dark:bg-neutral-900'>
        <div className='flex items-center'>
          <GitHubIcon />
          <div className='ml-3'>GitHub</div>
        </div>
        <ArrowIcon />
      </a>
    </div>
  );
};

export default SocialCards;
