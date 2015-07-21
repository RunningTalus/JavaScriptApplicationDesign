#!/bin/bash

PATH="/usr/bin:/usr/local/bin:/bin:/usr/sbin:/sbin:/usr/local/git/bin/git:$PATH"
export PATH

N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"  # Added by n-install (see http://git.io/n-install-repo).
export N_PREFIX

NPM_PACKAGES="${HOME}/npm-global" # So that npm finds its packages.
PATH="$NPM_PACKAGES/bin:$PATH" # To launch script directly from the shell.
unset MANPATH # Unset manpath so we can inherit from /etc/manpath via the `manpath' command
MANPATH="$NPM_PACKAGES/share/man:$(manpath)" # So that man finds the manpages.
NODE_PATH="$NPM_PACKAGES/lib/node_modules:$NODE_PATH" # So that node finds these packages.
export NPM_PACKAGES PATH MANPATH NODE_PATH

GIT_AUTHOR_NAME="Dave May"
GIT_AUTHOR_EMAIL="dave@davemay.org"
export GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL
