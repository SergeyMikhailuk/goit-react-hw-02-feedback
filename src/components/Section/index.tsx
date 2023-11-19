import React, { Component } from 'react';

class Section extends Component<SectionProps> {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};
