#!/usr/bin/env perl

use strict;
use warnings;
use FindBin;
use lib "$FindBin::Bin/../lib";
use lib "$FindBin::Bin/../../thirdparty/lib/perl5";
use Mojolicious::Commands;
use remOcular::MojoApp;

$ENV{MOJO_APP} = remOcular::MojoApp->new;

# Start commands
Mojolicious::Commands->start;
