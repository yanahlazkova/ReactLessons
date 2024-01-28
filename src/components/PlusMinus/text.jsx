export default function Text({size}) {
    return <p style={{fontSize: size}}>
    В этом примере:<br />
1. Родительский компонент ParentComponent определяет две переменные parameter1 и parameter2.
<br />
2. Затем он передает эти переменные в дочерний компонент ChildComponent в виде пропсов с именами prop1 и prop2.
    </p>
}