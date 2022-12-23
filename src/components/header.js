import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"

const Header = () => (
  <header>
      <h3 className={styles.title}>Header of the site</h3>
      <Link to="/">Home</Link><br />
  </header>
)

export default Header
