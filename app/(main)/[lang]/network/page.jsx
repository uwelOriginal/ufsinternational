import { getDictionary } from "@/lib/langDictionaries"

async function NetworkPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const about = dictionary?.network || { title: 'Error' }
  return (
    <div>
      <h1>{about.title}</h1>
    </div>
  )
}

export default NetworkPage
