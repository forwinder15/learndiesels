import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = (props) => {
  const { data } = props;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const newDateMod = ((data || {}).frontmatter || {}).updated;

  // get date for modified

  const myDate = new Date(newDateMod);
  const dayOfMonth = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();

  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const ddmmyyyy = year + "-" + pad(month + 1) + "-" + pad(dayOfMonth);

  const dateModified = ddmmyyyy;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = postTitle ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const description = postDescription ? postDescription : config.siteDescription;
  const image = postCover ? postCover : config.siteImage;
  const url = config.siteUrl + config.pathPrefix + postSlug;

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#",
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="msvalidate.01" content="17E3A9A27963C3889459D03DA4268BA3" />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:dateModified" content={dateModified} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
      />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object,
};

export default Seo;
