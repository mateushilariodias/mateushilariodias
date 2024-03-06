import { TextAboutSecrtion } from "@/data/TextAboutSection"

export default function TextAboutSecrtionRender(): JSX.Element {
    return (
        <ul className="max-w-4xl mx-auto">
            {TextAboutSecrtion.map((item: any) => {
                return (
                    <li key={item.id}>
                        <p className="text-xl text-justify pb-4">{item.content}</p>
                    </li>
                )
            })}
        </ul>
    )
}