interface Component<P> {
  props: P;
}

export interface WithEnhancement {
  enhanced: boolean;
}

type IsEnhanced<T> = (instance: T) => boolean;

export default function enhance<P>(
  component: Component<P>
): IsEnhanced<P & WithEnhancement> {
  return ({ enhanced, ...props }: WithEnhancement) => enhanced;
}
