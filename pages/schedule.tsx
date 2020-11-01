import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { Section } from 'src/pages/Home/elements'
import { getPageMarkdown } from './api/markdowns'

interface Props {
  body: string
}

export default function SchedulePage({ body }: Props) {
  return (
    <MainLayout>
      <Section>
        <MarkdownBody body={body}></MarkdownBody>
      </Section>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const { body } = getPageMarkdown('schedule')

  return {
    props: {
      body,
    },
  }
}
