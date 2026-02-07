import { Text } from '@/app/_components/text'

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Text variant="heading-3" className="text-light-100 sm:text-heading-2">
        {title}
      </Text>
    </div>
  )
}

export default SectionHeading
