# -*- coding: utf-8 -*-
{
    'name': "Systray Weather Information",

    'summary': """
        Adds a new systray menu for weather information""",

    'description': """
        Description
    """,

    'author': "Minions 6",

    'version': '15.0.1.0.0',
    'depends': ['point_of_sale'],

    # 'data': [
    #     'views/res_partner_inherit_views.xml',
    # ],
    'assets': {
        'web.assets_qweb': [
            'systray_weather_information/static/src/xml/systray_weather_info_views.xml',
        ],
        'web.assets_backend': [
            'systray_weather_information/static/src/js/weather.js',
        ]
    }
}
