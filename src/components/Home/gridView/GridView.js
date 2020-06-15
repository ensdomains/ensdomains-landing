import React from "react"
import styled from "@emotion/styled"
import mq from "../../../mediaQuery"
import PropTypes from "prop-types"
import { importAll } from "../../../utils"

const GridView = styled("section")`
  position: relative;
  padding: 0 0 100px;

  ${mq.medium`
    padding: 0 0 170px;
  `};



  h2 {
    margin-bottom: 50px;

    ${mq.medium`
      margin-bottom: 100px;
    `}
  }
  .row {
    display: flex;
    justify-content: ${props =>
      props.justifyContent ? props.justifyContent : `center`};
    margin: 0 auto 50px;
    width: 100%;
    flex-wrap: wrap;

    &:last-of-type {
      margin 0 auto 0;
    }

  }

  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 60px;

    img {
      margin-right: 5px;
    }

    .wallet-icon {
      width: 15px;
      height: 22px;
    }

    .desktop-icon {
      width: 29px;
      height: 22px;
    }

    .apps-icon {
      width: 22px;
      height: 23px;
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    width: 50%;
    ${mq.medium`
      width: 20%;
    `};

    img {
      display: block;
      max-width: 100%;
    }
    
    p {
      color: #3252C8;
      font-size: 16px;
      font-weight: 400;
      ${mq.medium`
        font-size: 20px;
      `};
    }

    &:hover {
      cursor: pointer;
      img {
        box-shadow: 4px 10px 20px 0 rgba(136,149,169,0.60);
      }
      
      p {
        transition: 0.2s ease-in-out;
        color: #5284FF;
      }
    }
  }
`

const ImgWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 50%;
  box-shadow: 4px 10px 20px 0 rgba(136, 149, 169, 0.25);
  width: 50%;
  margin-bottom: 15px;
  overflow: hidden;
`

export const Row = ({ list, className, children, links }) => {
  return (
    <React.Fragment>
      {children}
      <div className={`row ${className ? className : ""}`}>
        {list.map(item => (
          <GridItem
            key={item.name}
            src={item.src}
            name={item.name}
            fileName={item.fileName}
            links={links}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

const GridItem = ({ src, name, fileName, links }) => {
  if (links[fileName]) {
    return (
      <a className="grid-item" href={links[fileName].link}>
        <ImgWrapper>
          <img src={src} />
        </ImgWrapper>
        <p>{links[fileName].name || name}</p>
      </a>
    )
  }
  return (
    <a className="grid-item" href="">
      <ImgWrapper>
        <img src={src} />
      </ImgWrapper>
      <p>{name}</p>
    </a>
  )
}

export default class GridViewContainer extends React.Component {
  render() {
    return (
      <GridView
        justifyContent={this.props.justifyContent}
        innerRef={this.supported}
      >
        <div className="container">{this.props.children}</div>
      </GridView>
    )
  }
}

GridViewContainer.propTypes = {
  columns: PropTypes.number,
}
