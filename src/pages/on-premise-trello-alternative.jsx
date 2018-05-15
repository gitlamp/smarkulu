import React from 'react'
import graphql from 'graphql'
import ReactTable from 'react-table'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Above } from '../components/Partials'
import { CTA, Copy } from '../components/Elements'
import 'react-table/react-table.css'

class TrelloAlter extends React.Component {
  constructor() {
    super()
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey

    const tableContent = [{
      feature: 'Pricing',
      trello: 'Free or $9.99/user',
      taskulu: '10 users free or $6/user'
    }, {
      feature: 'Max File Size',
      trello: '10MB/250MB',
      taskulu: '10MB/500MB'
    }, {
      feature: 'Task Management',
      trello: <span className="tick">✔︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Time Tracking',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Chat',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Reporting Dashboard',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Role-based access control',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'File Previews',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Self-hosted Edition',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Private Cloud Edition',
      trello: <span className="cross">✖︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'Mobile Apps',
      trello: <span className="tick">✔︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }, {
      feature: 'API',
      trello: <span className="tick">✔︎</span>,
      taskulu: <span className="tick">✔︎</span>
    }]

    const columns = [{
      Header: '',
      accessor: 'feature'
    }, {
      Header: () => <h4 className="taskulu-table-header">Trello</h4>,
      accessor: 'trello',
    }, {
      Header: () => <h4 className="taskulu-table-header">Taskulu</h4>,
      accessor: 'taskulu'
    }]
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
            <Above center="xs" className="gradient-yellow-green" hasGradient>
              <Col xs={10}>
                <Copy type="header" element="h1" child={node.body.hero.header}/>
                <CTA className="button-submit" type="login" name={node.body.hero.cta} langKey={langKey}/>
              </Col>
            </Above>
            <Row center="xs">
              <Col xs={10}>
                <ReactTable data={tableContent}
                            showPagination={false}
                            minRows={0}
                            columns={columns}
                            className="taskulu-table -striped -highlight"
                            filterable={false}
                            sortable={false}/>
              </Col>
            </Row>
            <Row tagName="section" center="xs" className="block-cta">
              <Col xs={10} lg={6}>
                <Copy type="announce-white" element="h3" child={node.body.demoCTA.header}/>
                <CTA className="button-blue" name={node.body.demoCTA.cta} href="/enterprise" type="internal" langKey={langKey}/>
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
}

export default TrelloAlter

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TrelloAlter {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "en"},
        slug: {eq: "/on-premise-trello-alternative"}
      }
    }
  ){
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          hero {
            header
            cta
          }
          intro {
            header
            desc
          }
          demoCTA {
            header
            cta
          }
        }
      }
    }
  }
}
`