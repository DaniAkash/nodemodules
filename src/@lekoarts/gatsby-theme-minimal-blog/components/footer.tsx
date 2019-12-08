/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Flex
      as="footer"
      sx={{
        variant: `dividers.top`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        {`Built with `}
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://www.gatsbyjs.org/"
        >{`Gatsby`}
        </Styled.a>
        {` and ❤️`}
      </div>
    </Flex>
  )
}

export default Footer
