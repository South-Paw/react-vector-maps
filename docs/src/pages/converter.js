/* eslint-env browser */

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { parse } from 'svgson';
import styled from 'styled-components';
import { rgba } from 'polished';

import { VectorMap } from '../../../src/VectorMap';
import { Layout } from '../components/Layout';

const capitalize = s =>
  s
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

const Dropzone = styled.div`
  padding: 1rem;
  border: 2px dashed ${p => rgba(p.theme.colors.dark, 0.13)};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: border-color ease-in-out 0.3s;

  &:focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;

const Error = styled.div`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #960e0e;
  color: ${p => p.theme.colors.white};
`;

const Loading = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Preview = styled.div`
  margin-top: 16px;
  padding: 1rem;
  border: 4px solid ${p => rgba(p.theme.colors.dark, 0.13)};

  svg {
    margin: 0 auto;
    max-width: 600px;
    display: block;
  }
`;

const Output = styled.textarea`
  margin-bottom: 8px;
  padding: 8px;
  max-width: 100%;
  min-width: 100%;
  min-height: 8rem;
  height: 8rem;
  border: 4px solid ${p => rgba(p.theme.colors.dark, 0.13)};
  font-size: 14px;
  outline: none;
`;

const Actions = styled.div`
  display: flex;
  flex-flow: nowrap row;
  font-size: 16px;

  > * {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  padding: 4px 8px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px ${p => rgba(p.theme.colors.black, 0.2)};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  font-weight: 500;
  line-height: 1.5;

  :hover,
  :focus {
    box-shadow: 0 1px 0 ${p => rgba(p.theme.colors.black, 0.2)}, 0 2px 5px ${p => rgba(p.theme.colors.black, 0.2)};
    color: ${p => p.theme.colors.alt};
    text-decoration: none;
  }
`;

const seo = {
  title: 'Converter',
};

// eslint-disable-next-line react/prop-types
const FileDropzone = ({ onFileDropped, fileName }) => {
  const onDrop = useCallback(onFileDropped, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <span>Drop the files here</span>
      ) : (
        <span>{fileName || 'Click to choose a file (.svg) or drag and drop one here'}</span>
      )}
    </Dropzone>
  );
};

const ConverterProps = () => {
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState(undefined);
  const [output, setOutput] = useState(undefined);

  const onFileDropped = acceptedFiles => {
    setError(undefined);
    setIsLoading(true);
    setFileName(undefined);
    setOutput(undefined);

    const file = acceptedFiles[0];

    // Check we can use the Blob.text() API
    if (file.text === undefined) {
      setError(`Your browser does not support the 'Blob.text()' API. Please use Chrome 76+ or Firefox 69+`);
      setIsLoading(false);
      return;
    }

    // Needs to be an 'image/svg' type.
    if (!file.type.includes('image/svg')) {
      setError(`Invalid file type, must be 'image/svg' but recieved '${file.type}'`);
      setIsLoading(false);
      return;
    }

    setFileName(file.name);

    file
      .text()
      .then(parse)
      .then(json => {
        const localFileName = file.name.split('.')[0];

        const layers = json.children
          .filter(({ name }) => name === 'path')
          .map(({ attributes }) => ({
            id: attributes.id.toLowerCase(),
            name: attributes.title || capitalize(attributes.id),
            d: attributes.d,
          }));

        const map = {
          id: localFileName,
          name: capitalize(localFileName.split('-').join(' ')),
          viewBox: `0 0 ${parseFloat(json.attributes.width)} ${parseFloat(json.attributes.height)}`,
          layers,
        };

        setOutput(map);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      });
  };

  const downloadFile = () => {
    const blob = new Blob([JSON.stringify(output)], { type: 'application/json' });
    const el = document.createElement('a');
    el.href = URL.createObjectURL(blob);
    el.download = `${fileName.split('.')[0]}.json`;
    document.body.appendChild(el);
    el.click();
  };

  return (
    <Layout seo={seo}>
      <h2>Converter</h2>
      <p>Before you convert your SVG, please check the following things</p>
      <ul>
        <li>
          <code>width</code> and <code>height</code> are required attributes on the <code>&lt;svg /&gt;</code> element.
        </li>
        <li>
          The SVG is assumed to have a viewBox origin of <code>0 0</code> and uses the given <code>width</code> and{' '}
          <code>height</code> as the viewBox maximum values.
        </li>
        <li>
          Only <code>&lt;path /&gt;</code> elements will be converted to JSON.
        </li>
        <li>
          <code>id</code> and <code>d</code> attributes are required on all path elements and the <code>id</code> must
          be uniquie for each path.
        </li>
        <li>
          A <code>title</code> attribute on a path element will be used as the layers <code>name</code> field. If no
          title is present, the <code>id</code> will be capitalized and used.
        </li>
      </ul>
      <p>If your file doesn&apos;t meet these requirements then the output may be unexpected or incorrect 😉</p>
      <h3 style={{ marginTop: 24 }}>Example SVG</h3>
      <pre>
        {`<svg width="100" height="100">
  <path id="region-1" title="Awesome Region" d="..." />
  <path id="region-2" title="Some Other Area" d="..." />
  <path id="region-3" title="Another Location" d="..." />
</svg>`}
      </pre>
      <hr />
      <h3>File</h3>
      <FileDropzone onFileDropped={onFileDropped} fileName={fileName} />
      {error && <Error>{error}</Error>}
      {isLoading && !output && <Loading>Loading...</Loading>}
      {output && (
        <>
          <h3 style={{ marginTop: 24 }}>Map Preview</h3>
          <Preview>
            <VectorMap {...output} />
          </Preview>
          <h3 style={{ marginTop: 24 }}>JSON Output</h3>
          <Output value={JSON.stringify(output)} readonly spellCheck={false} />
          <Actions>
            <Button style={{ backgroundColor: '#a82b2b' }} onClick={downloadFile}>
              Download JSON
            </Button>
          </Actions>
        </>
      )}
    </Layout>
  );
};

export default ConverterProps;
