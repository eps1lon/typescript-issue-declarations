export interface Props {
  foo: string;
}

export default class A {
  public props: Props;
  constructor(p: Props) {
    this.props = p;
  }
}