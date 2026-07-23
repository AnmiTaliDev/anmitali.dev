import BiosApp from '@/components/Bios/BiosApp';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();

  return <BiosApp posts={posts} />;
}
