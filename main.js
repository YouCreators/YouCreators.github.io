(() => {
  const fs = require("fs-extra");
  fs.copy("assets", "build/assets");
  fs.copy("lib", "build/lib");
})();
(() => {
  const fs = require("fs"),
    jsonminify = require("jsonminify");
  const file = "ui_config.json";
  const build = "build/ui_config.json";
  fs.readFile(file, "utf8", (err, dat) => {
    const minify = JSON.minify(dat);
    fs.writeFile(build, minify, "utf8", (err) => err ?? console.log(build));
  });
})();
(() => {
  const fs = require("fs"),
    path = require("path"),
    jsonminify = require("jsonminify"),
    folder = "ui",
    build_folder = "build/ui";

  fs.readdir(folder, (err, files) => {
    if (!fs.existsSync(build_folder)) {
      fs.mkdirSync(build_folder, { recursive: true });
    }

    files.forEach((file) => {
      const path_file = path.join(folder, file),
        path_build_file = path.join(build_folder, file);

      if (path.extname(file) === ".json") {
        fs.readFile(path_file, "utf8", (err, dat) => {
          const minify = jsonminify(dat);

          fs.writeFile(path_build_file, minify, (err) =>
            console.log(path_build_file)
          );
        });
      }
    });
  });
})();
