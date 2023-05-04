import React from 'react';

const links = [
  { url: 'https://twitter.com/ryanbarleydev', imageSrc: 'twitter' },
  { url: 'https://linkedin.com/in/rmbarley', imageSrc: 'linkedin' },
  { url: 'https://facebook.com/', imageSrc: 'facebook' },
  { url: 'https://instagram.com/', imageSrc: 'instagram' },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:jusitfy-start my-10 gap-7">
      {links.map((link) => (
        <a
          className="hover:opacity-50 transition duration-500"
          href={link.url}
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={`../assets/${link.imageSrc}.png`}
            alt={`${link.imageSrc} Link`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
