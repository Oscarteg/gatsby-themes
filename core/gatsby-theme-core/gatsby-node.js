const fs = require("fs");
const format = require("date-fns/format");

const withDefaults = require(`./theme-options.ts`);

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { imagesPath } = withDefaults(themeOptions);

  // Check if images directory exists.
  if (!fs.existsSync(imagesPath)) {
    reporter.warn(`The ${imagesPath} directory is missing. Creating it now...`);
    fs.mkdirSync(imagesPath, { recursive: true });
  }
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  { formatAsDateString = true, formatting = { format: "PPP", utc: false } }
) => {
  const { createNode } = actions;

  const buildDateData = {
    currentDate: formatAsDateString
      ? format(new Date(), formatting.format, formatting.utc)
      : new Date(),
  };

  const buildDateNodeContent = JSON.stringify(buildDateData);

  const buildDateNodeMeta = {
    id: createNodeId(`current-build-date`),
    parent: null,
    children: [],
    internal: {
      type: `CurrentBuildDate`,
      mediaType: `text/html`,
      content: buildDateNodeContent,
      contentDigest: createContentDigest(buildDateData),
    },
  };

  const buildDateNode = { ...buildDateData, ...buildDateNodeMeta };

  createNode(buildDateNode);
};
