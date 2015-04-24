var transform_tools = require('browserify-transform-tools'),
    mkdirp = require('mkdirp'),
    cwd = process.cwd(),
    target = '/tmp/browserify-write-debug',
    path = require('path'),
    fs = require('fs');

module.exports = transform_tools.makeStringTransform('write-debug', {}, function(content, opts, done) { 
    var outfn = opts.file.replace(cwd, '');
    outfn = path.join(target, outfn);
    console.warn('writing', outfn);
    mkdirp(path.dirname(outfn), function(err) { 
        fs.writeFileSync(outfn, content);
        done(null, content);
    });
});
