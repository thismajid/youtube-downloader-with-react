import ytdl from "ytdl-core";

const download = async (req, res, next) => {
  try {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const v_id = url.split("v=")[1];
    const formats = info.formats.sort((a, b) => {
      return a.mimeType < b.mimeType;
    });
    return res.json({
      url,
      stream: `https://www.youtube.com/embed/${v_id}`,
      formats,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { download };
