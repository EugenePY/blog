#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import os
AUTHOR = 'Eugene Kow'
SITENAME = 'Quantitative Research'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Tokyo'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Some links', '#'),)

# Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5
# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
MARKUP = ('md', 'ipynb')
TOP = os.path.dirname(__file__)

#PATH = TOP
MARKDOWN = {
    'extension_configs': {
        'markdown_bokeh.bokeh': {"base_path": TOP},
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5'
}
#MD_EXTENSIONS = ['codehilite(css_class=highlight)','extra', "mdx_include"]

PLUGIN_PATHS = ['./plugins']
PLUGINS = ['ipynb.markup', 'jinja']
THEME = f'{TOP}/theme/pelican-alchemy/alchemy'
