import Link from 'next/link'
const Index = () => (
  <div>
    Hello, world. This is my first next.js site. I'm building it because I'm trying to sharpen my web3 skills and read from some tweets that this might be a solid route.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
