interface Component<P> {
    props: P;
}
export interface WithEnhancement {
    enhanced: boolean;
}
declare type IsEnhanced<T> = (instance: T) => boolean;
export default function enhance<P>(component: Component<P>): IsEnhanced<P & WithEnhancement>;
export {};
