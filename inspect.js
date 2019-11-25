{
  mode: 'development',
  context: 'E:\\Projects\\mobilev2',
  devtool: 'cheap-module-eval-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\Projects\\mobilev2\\dist',
    filename: '[name].js',
    publicPath: '/',
    globalObject: 'this'
  },
  resolve: {
    alias: {
      '@': 'E:\\Projects\\mobilev2\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.ts',
      '.tsx'
    ],
    modules: [
      'node_modules',
      'E:\\Projects\\mobilev2\\node_modules',
      'E:\\Projects\\mobilev2\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      'E:\\Projects\\mobilev2\\node_modules',
      'E:\\Projects\\mobilev2\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          'vux-loader',
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\Projects\\mobilev2\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '68591d86'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: 'E:\\Projects\\mobilev2\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '68591d86'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        use: [
          /* config.module.rule('pug').use('pug-plain-loader') */
          {
            loader: 'pug-plain-loader'
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\Projects\\mobilev2\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '393310eb'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\Projects\\mobilev2\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '55925bbd'
            }
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'babel-loader'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\Projects\\mobilev2\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '55925bbd'
            }
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'babel-loader'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      },
      {
        test: /node_modules.*vux.src.*?js$/,
        loader: 'babel-loader',
        include: 'E:\\Projects\\mobilev2\\node_modules\\vux'
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('no-emit-on-errors') */
    new NoEmitOnErrorsPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        template: 'E:\\Projects\\mobilev2\\public\\index.html'
      }
    ),
    /* config.plugin('pwa') */
    new HtmlPwaPlugin(
      {
        name: 'aaa',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: 'E:\\Projects\\mobilev2\\public',
          to: 'E:\\Projects\\mobilev2\\dist',
          toType: 'dir',
          ignore: [
            'index.html',
            '.DS_Store'
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: true,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      }
    ),
    {
      options: {
        vux: {
          options: {
            ssr: false,
            projectRoot: 'E:\\Projects\\mobilev2',
            vueVersion: '2.5.17',
            useVuxUI: true
          },
          plugins: [
            {
              name: 'vux-ui'
            }
          ],
          allPlugins: [
            {
              name: 'vux-ui'
            }
          ]
        },
        test: {
          test: () => true
        }
      }
    },
    {
      options: {
        vuxMaps: {
          NOTICE: 'THIS FILE IS AUTOGENERATED BY npm run build-docs',
          Actionsheet: 'src/components/actionsheet/index.vue',
          Agree: 'src/components/agree/index.vue',
          AjaxPlugin: 'src/plugins/ajax/index.js',
          Alert: 'src/components/alert/index.vue',
          AlertModule: 'src/plugins/alert/module',
          AlertPlugin: 'src/plugins/alert/index.js',
          AppPlugin: 'src/plugins/app/index.js',
          Array2stringFilter: 'src/filters/array2String.js',
          Badge: 'src/components/badge/index.vue',
          base64: 'src/tools/base64/index.js',
          Blur: 'src/components/blur/index.vue',
          Box: 'src/components/box/index.vue',
          BusPlugin: 'src/plugins/bus/index.js',
          ButtonTab: 'src/components/button-tab/button-tab.vue',
          ButtonTabItem: 'src/components/button-tab/button-tab-item.vue',
          Calendar: 'src/components/calendar/index.vue',
          Card: 'src/components/card/index.vue',
          Cell: 'src/components/cell/index.vue',
          CellBox: 'src/components/cell-box/index.vue',
          CellFormPreview: 'src/components/cell-form-preview/index.vue',
          Checker: 'src/components/checker/checker.vue',
          CheckerItem: 'src/components/checker/checker-item.vue',
          CheckIcon: 'src/components/check-icon/index.vue',
          Checklist: 'src/components/checklist/index.vue',
          ChinaAddressData: 'src/datas/china_address.json',
          ChinaAddressV1Data: 'src/datas/china_address_v1.json',
          ChinaAddressV2Data: 'src/datas/china_address_v2.json',
          ChinaAddressV3Data: 'src/datas/china_address_v3.json',
          ChinaAddressV4Data: 'src/datas/china_address_v4.json',
          ChinamobileTool: 'src/tools/validator/chinaMobile.js',
          ClickOutsideDirective: 'src/directives/click-outside/index.js',
          Clocker: 'src/components/clocker/index.vue',
          CloseDialogsPlugin: 'src/plugins/close-dialogs/index.js',
          ColorPicker: 'src/components/color-picker/index.vue',
          ConfigPlugin: 'src/plugins/config/index.js',
          Confirm: 'src/components/confirm/index.vue',
          ConfirmPlugin: 'src/plugins/confirm/index.js',
          cookie: 'src/tools/cookie/index.js',
          Countdown: 'src/components/countdown/index.vue',
          Countup: 'src/components/countup/index.vue',
          dateFormat: 'src/tools/date/format.js',
          dateRange: 'src/tools/date/range.js',
          Datetime: 'src/components/datetime/index.vue',
          DatetimePlugin: 'src/plugins/datetime/index.js',
          DatetimeRange: 'src/components/datetime-range/index.vue',
          DatetimeView: 'src/components/datetime-view/index.vue',
          debounce: 'src/tools/debounce/index.js',
          Demobasic: 'src/components/fullpage/DemoBasic.vue',
          Demoindex: 'src/components/popover/DemoIndex.vue',
          DevicePlugin: 'src/plugins/device/index.js',
          DevTip: 'src/components/dev-tip/index.vue',
          Divider: 'src/components/divider/index.vue',
          Drawer: 'src/components/drawer/index.vue',
          Flexbox: 'src/components/flexbox/flexbox.vue',
          FlexboxItem: 'src/components/flexbox/flexbox-item.vue',
          Flow: 'src/components/flow/flow.vue',
          FlowLine: 'src/components/flow/flow-line.vue',
          FlowState: 'src/components/flow/flow-state.vue',
          FormatTimeFilter: 'src/filters/format-time.js',
          FormPreview: 'src/components/form-preview/index.vue',
          FriendlyTimeFilter: 'src/filters/friendly-time.js',
          Fullpage: 'src/components/fullpage/index.vue',
          Grid: 'src/components/grid/grid.vue',
          GridItem: 'src/components/grid/grid-item.vue',
          Group: 'src/components/group/index.vue',
          GroupTitle: 'src/components/group-title/index.vue',
          Icon: 'src/components/icon/index.vue',
          InlineCalendar: 'src/components/inline-calendar/index.vue',
          InlineDesc: 'src/components/inline-desc/index.vue',
          InlineLoading: 'src/components/inline-loading/index.vue',
          InlineXNumber: 'src/components/inline-x-number/index.vue',
          InlineXSwitch: 'src/components/inline-x-switch/index.vue',
          InviewDirective: 'src/directives/inview/index.js',
          Loading: 'src/components/loading/index.vue',
          LoadingPlugin: 'src/plugins/loading/index.js',
          LoadMore: 'src/components/load-more/index.vue',
          LocalePlugin: 'src/plugins/locale/index.js',
          Marquee: 'src/components/marquee/marquee.vue',
          MarqueeItem: 'src/components/marquee/marquee-item.vue',
          Masker: 'src/components/masker/index.vue',
          md5: 'src/tools/md5/index.js',
          Msg: 'src/components/msg/index.vue',
          Name2valueFilter: 'src/filters/name2value.js',
          numberComma: 'src/tools/number/comma.js',
          numberPad: 'src/tools/number/pad.js',
          numberRandom: 'src/tools/number/random.js',
          numberRange: 'src/tools/number/range.js',
          NumberRoller: 'src/components/number-roller/index.vue',
          Panel: 'src/components/panel/index.vue',
          Picker: 'src/components/picker/index.vue',
          Popover: 'src/components/popover/index.vue',
          Popup: 'src/components/popup/index.vue',
          PopupHeader: 'src/components/popup-header/index.vue',
          PopupPicker: 'src/components/popup-picker/index.vue',
          PopupRadio: 'src/components/popup-radio/index.vue',
          Previewer: 'src/components/previewer/index.vue',
          Qrcode: 'src/components/qrcode/index.vue',
          querystring: 'src/tools/querystring/index.js',
          Radio: 'src/components/radio/index.vue',
          Range: 'src/components/range/index.vue',
          Rater: 'src/components/rater/index.vue',
          Scroller: 'src/components/scroller/index.vue',
          Search: 'src/components/search/index.vue',
          Selector: 'src/components/selector/index.vue',
          Shake: 'src/components/shake/index.vue',
          Spinner: 'src/components/spinner/index.vue',
          Step: 'src/components/step/step.vue',
          StepItem: 'src/components/step/step-item.vue',
          Sticky: 'src/components/sticky/index.vue',
          stringTrim: 'src/tools/string/trim.js',
          Swipeout: 'src/components/swipeout/swipeout.vue',
          SwipeoutButton: 'src/components/swipeout/swipeout-button.vue',
          SwipeoutItem: 'src/components/swipeout/swipeout-item.vue',
          Swiper: 'src/components/swiper/swiper.vue',
          SwiperItem: 'src/components/swiper/swiper-item.vue',
          Tab: 'src/components/tab/tab.vue',
          Tabbar: 'src/components/tabbar/tabbar.vue',
          TabbarItem: 'src/components/tabbar/tabbar-item.vue',
          TabItem: 'src/components/tab/tab-item.vue',
          throttle: 'src/tools/throttle/index.js',
          Timeline: 'src/components/timeline/timeline.vue',
          TimelineItem: 'src/components/timeline/timeline-item.vue',
          Tip: 'src/components/tip/index.vue',
          Toast: 'src/components/toast/index.vue',
          ToastPlugin: 'src/plugins/toast/index.js',
          TransferDom: 'src/directives/transfer-dom/index.js',
          TransferDomDirective: 'src/directives/transfer-dom/index.js',
          trim: 'src/tools/string/trim',
          Value2nameFilter: 'src/filters/value2name.js',
          VArea: 'src/components/v-chart/v-area.vue',
          VAxis: 'src/components/v-chart/v-axis.vue',
          VBar: 'src/components/v-chart/v-bar.vue',
          VChart: 'src/components/v-chart/v-chart.vue',
          VGuide: 'src/components/v-chart/v-guide.vue',
          Video: 'src/components/video/index.vue',
          ViewBox: 'src/components/view-box/index.vue',
          VLegend: 'src/components/v-chart/v-legend.vue',
          VLine: 'src/components/v-chart/v-line.vue',
          VPie: 'src/components/v-chart/v-pie.vue',
          VPoint: 'src/components/v-chart/v-point.vue',
          VScale: 'src/components/v-chart/v-scale.vue',
          VTooltip: 'src/components/v-chart/v-tooltip.vue',
          VuxComponentListData: 'src/datas/vux_component_list.json',
          WechatEmotion: 'src/components/wechat-emotion/index.vue',
          WechatPlugin: 'src/plugins/wechat/index.js',
          WeekCalendar: 'src/components/week-calendar/index.vue',
          WepayInput: 'src/components/wepay-input/index.vue',
          XAddress: 'src/components/x-address/index.vue',
          XButton: 'src/components/x-button/index.vue',
          XCircle: 'src/components/x-circle/index.vue',
          XDialog: 'src/components/x-dialog/index.vue',
          XHeader: 'src/components/x-header/index.vue',
          XHr: 'src/components/x-hr/index.vue',
          XImg: 'src/components/x-img/index.vue',
          XInput: 'src/components/x-input/index.vue',
          XNumber: 'src/components/x-number/index.vue',
          XProgress: 'src/components/x-progress/index.vue',
          XSwitch: 'src/components/x-switch/index.vue',
          XTable: 'src/components/x-table/index.vue',
          XTextarea: 'src/components/x-textarea/index.vue'
        },
        test: {
          test: () => true
        }
      }
    },
    {
      options: {
        vuxVariableMap: {
          'dialog-gap-width': '@weuiDialogGapWidth'
        },
        test: {
          test: () => true
        }
      }
    },
    {
      options: {
        vuxLocales: {
          en: {
            'vux.actionsheet.cancel': 'cancel',
            'vux.alert.button_text': 'OK',
            'vux.calendar.cancel_text': 'cancel',
            'vux.calendar.confirm_text': 'done',
            'vux.confirm.confirm_text': 'confirm',
            'vux.confirm.cancel_text': 'cancel',
            'vux.datetime.cancel_text': 'cancel',
            'vux.datetime.confirm_text': 'done',
            'vux.inline-calendar.week_day_0': 'Su',
            'vux.inline-calendar.week_day_1': 'Mo',
            'vux.inline-calendar.week_day_2': 'Tu',
            'vux.inline-calendar.week_day_3': 'We',
            'vux.inline-calendar.week_day_4': 'Th',
            'vux.inline-calendar.week_day_5': 'Fr',
            'vux.inline-calendar.week_day_6': 'Sa',
            'vux.loading.loading': 'loading',
            'vux.popup-picker.cancel_text': 'cancel',
            'vux.popup-picker.confirm_text': 'ok',
            'vux.search.cancel_text': 'cancel',
            'vux.search.placeholder': 'Search',
            'vux.x-header.back_text': 'Back'
          },
          'zh-CN': {
            'vux.actionsheet.cancel': '取消',
            'vux.alert.button_text': '确定',
            'vux.calendar.cancel_text': '取消',
            'vux.calendar.confirm_text': '确定',
            'vux.confirm.confirm_text': '确定',
            'vux.confirm.cancel_text': '取消',
            'vux.datetime.cancel_text': '取消',
            'vux.datetime.confirm_text': '确定',
            'vux.inline-calendar.week_day_0': '日',
            'vux.inline-calendar.week_day_1': '一',
            'vux.inline-calendar.week_day_2': '二',
            'vux.inline-calendar.week_day_3': '三',
            'vux.inline-calendar.week_day_4': '四',
            'vux.inline-calendar.week_day_5': '五',
            'vux.inline-calendar.week_day_6': '六',
            'vux.loading.loading': '加载中',
            'vux.popup-picker.cancel_text': '取消',
            'vux.popup-picker.confirm_text': '完成',
            'vux.search.cancel_text': '取消',
            'vux.search.placeholder': '搜索',
            'vux.x-header.back_text': '返回'
          }
        },
        test: {
          test: () => true
        }
      }
    },
    {
      callbacks: [
        function () { /* omitted long function */ }
      ]
    },
    {
      definitions: {
        V_LOCALE: '"zh-CN"',
        V_SSR: 'false',
        SUPPORT_SSR_TAG: 'true'
      }
    }
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
