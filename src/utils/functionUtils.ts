import { cvFileName, scope } from 'app/constant';

export const fileDownload = () => {
  const link = document.createElement('a');
  link.href = `${scope}/${cvFileName}`;
  link.target = 'blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
