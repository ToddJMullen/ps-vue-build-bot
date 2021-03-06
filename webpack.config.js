{
  mode: 'production',
  context: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot',
  devtool: 'source-map',
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
    path: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/dist',
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  resolve: {
    symlinks: false,
    alias: {
      '@': '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json'
    ],
    modules: [
      'node_modules',
      '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules',
      '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules',
      '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/.cache/vue-loader',
              cacheIdentifier: '30bdd17d'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/.cache/vue-loader',
              cacheIdentifier: '30bdd17d'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'media/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-plain-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
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
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
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
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
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
      {
        test: /\.sass$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          {
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
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
      {
        test: /\.less$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
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
      {
        test: /\.styl(us)?$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          {
            use: [
              {
                loader: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
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
      {
        test: /\.jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/.cache/babel-loader',
              cacheIdentifier: 'c5567624'
            }
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '6fb8e25e',
              emitWarning: true,
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      },
      {
        test: /\.coffee$/,
        use: [
          'coffee-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      {
        options: {
          test: /\.js(\?.*)?$/i,
          warningsFilter: function () {
                return true;
              },
          extractComments: false,
          sourceMap: true,
          cache: true,
          parallel: true,
          include: undefined,
          exclude: undefined,
          uglifyOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
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
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssAssetsWebpackPlugin(
      {
        canPrint: false,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: {
            disable: true
          },
          mergeLonghand: false
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        chunksSortMode: 'dependency',
        template: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/public/index.html'
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
          from: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/public',
          to: '/home/todd/Dev/Ps/vue/VueFundamentals/build-a-bot/dist',
          ignore: [
            'index.html',
            '.DS_Store'
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
