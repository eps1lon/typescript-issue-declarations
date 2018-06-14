import ClassA from "./classA";
import enhance from "./enhance";

type Props = ClassA["props"];

const Enhanced = enhance<Props>(new ClassA({ foo: "1" }));
export default Enhanced;
