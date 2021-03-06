# project/server/config.py

import os
basedir = os.path.abspath(os.path.dirname(__file__))


class BaseConfig(object):
    """Base configuration."""
    DEBUG = False


class DevelopmentConfig(BaseConfig):
    """Development configuration."""
    DEBUG = True
    SEND_FILE_MAX_AGE_DEFAULT = 0


class TestingConfig(BaseConfig):
    """Testing configuration."""
    DEBUG = True


class ProductionConfig(BaseConfig):
    """Production configuration."""
    DEBUG = False
