import type { MDXComponents } from 'mdx/types'
import { RiskNote, KeyTakeaway, InsightBox } from './components/MdxBlocks'
import { ArticleHeader } from './components/ArticleHeader'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArticleHeader,
    RiskNote,
    KeyTakeaway,
    InsightBox,
    ...components,
  }
}
