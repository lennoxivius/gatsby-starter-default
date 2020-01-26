import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navi = ({ title, data }) => {
  return (
    <Navbar className="mb-5" expand="lg" bg="light" variant="light">
      <div className="container">
        <Navbar.Brand href="/" title="Aktivitetsbuffet.dk">
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="mr-auto">
            {data.menu.edges.map(l => (
              <Link
                key={l.node.strapiId}
                className="nav-item nav-link"
                to={encodeURI(`/${l.node.slug}`)}
                title={l.node.title}
                activeClassName="active"
              >
                {l.node.content}
              </Link>
            ))}
          </Nav>
          {/* <Search collapse indices={searchIndices} /> */}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export const MemoizedNavi = React.memo(Navi)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        menu: allStrapiMenulink(
          limit: 5
          sort: { order: ASC, fields: position }
        ) {
          edges {
            node {
              title
              slug
              content
              strapiId
              position
            }
          }
        }
      }
    `}
    render={data => <MemoizedNavi data={data} {...props} />}
  />
)
