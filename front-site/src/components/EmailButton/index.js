import React from 'react';
import { Content } from './styles';

function EmailButton({ email, icon, subject, body }) {
  const emailHref = email ? `mailto:${email}` : 'mailto:suporte@musii.app';
  const subjectHref = `?subject=${subject}`;
  const bodyHref = body ? `&body=${body}` : '';

  return (
    <Content>
      <a href={emailHref+subjectHref+bodyHref}>{subject}</a>
    </Content>
  );
}
export default EmailButton;