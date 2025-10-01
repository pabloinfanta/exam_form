require "yaml"

# 🔧 habilitar alias en safe_load
# 🔧 habilitar alias en safe_load
module Psych
  class << self
    alias_method :old_safe_load, :safe_load
    def safe_load(yaml, *args, **kwargs)
      kwargs[:aliases] = true
      old_safe_load(yaml, *args, **kwargs)
    end
  end
end


ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.
