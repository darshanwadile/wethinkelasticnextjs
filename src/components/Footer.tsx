'use client';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <ul>
        <li>© {currentYear} wethinkelastic</li>
        <li>
          <a href="#" target="_blank">
            Nos actus
          </a>
        </li>
        <li>
          <a href="mailto:uncafe@wethinkelastic.com">uncafe@wethinkelastic.com</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
        <li>
          <a href="#">Mentions légales</a>
        </li>
      </ul>
    </footer>
  );
};
