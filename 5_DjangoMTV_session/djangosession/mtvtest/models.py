from django.db import models

class COUNT_TB(models.Model):
    count_num = models.IntegerField(default=0, verbose_name="몇번?")

    def __str__(self):
        return str(self.count_num)
    
    class Meta:
        db_table = "COUNT_TB"
        verbose_name = "몇번눌렀지"
        verbose_name_plural = "몇번눌렀지"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)