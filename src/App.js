import React from 'react';
import { Button, Link } from 'carbon-components-react';
import { default as Api124 } from '@carbon/icons-react/lib/API--1/24';
import Document24 from '@carbon/icons-react/lib/document/24';
import IbmCloud24 from '@carbon/icons-react/lib/ibm-cloud/24';
import Launch16 from '@carbon/icons-react/lib/launch/16';
import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import useScript from './hooks/useScript';

const HEADER_TITLE = 'Vilas Text to Speech';
const HEADER_DESCRIPTION =
  'The Vilas Text to Speech service understands text and natural language to generate synthesized audio output complete with appropriate cadence and intonation.';
const HEADER_LINKS = [
  <Link
    className="link"
    key="api-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://vilasvietnam.com"
  >
    <p className="link-text">VILASIT</p>
    <Api124 className="link-icon" />
  </Link>,
  <Link
    className="link"
    key="docs-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-gettingStarted"
  >
    <p className="link-text">Documentation</p>
    <Document24 className="link-icon" />
  </Link>,
  <Link
    className="link"
    key="github-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/IBM/text-to-speech-code-pattern"
  >
    <p className="link-text">GitHub</p>
    <LogoGithub24 className="link-icon" />
  </Link>,
  
];

export const App = () => {
  useScript(
    'https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js',
  );

  return (
    <div className="app-container">
      <Header
        description={HEADER_DESCRIPTION}
        links={HEADER_LINKS}
        title={HEADER_TITLE}
      />
      <ServiceContainer />
    </div>
  );
};

export default App;
