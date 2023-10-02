# Generated by Django 3.2.19 on 2023-06-01 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='COUNT_TB',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count_num', models.IntegerField(default=0, verbose_name='몇번?')),
            ],
            options={
                'verbose_name': '몇번눌렀지',
                'verbose_name_plural': '몇번눌렀지',
                'db_table': 'COUNT_TB',
            },
        ),
    ]
