import Article from 'layout/Article'
import Link from 'next/link'

export default function Page() {
  return (
    <Article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Nulla facilisi. Maecenas nec nunc eget nunc
        tincidunt tincidunt. Proin euismod, nunc eget aliquam ultricies, nunc
        nisl tincidunt nunc, nec tincidunt nunc nunc eget nunc.
      </p>
      <Link href='/'>Back to home</Link>
    </Article>
  )
}
