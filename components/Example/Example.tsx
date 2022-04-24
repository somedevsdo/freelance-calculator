import React from 'react';

/**
 * Example props.
 */
interface IExampleProps {
  /**
   * The text to render.
   */
  text: string;
}

export default function Example(props: IExampleProps) {
  const { text } = props;
  return <div>{text}</div>;
}
