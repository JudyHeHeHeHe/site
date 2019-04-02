# encoding: utf-8
#
# Use webpack for assets

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascript'
set :images_dir, 'assets/images'

activate :external_pipeline,
  name: :webpack,
  command: build? ?  "yarn run build" : "yarn run start",
  source: ".tmp/dist",
  latency: 1

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end
