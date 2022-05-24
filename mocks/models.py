
from django.db import models

# Create your models here.


class MaEutaQuestionHo(models.Model):
    question_haru = models.CharField(max_length=200)
    question_num = models.IntegerField()

    def __str__(self):
        return self.question_haru


class MaAnsewersHo(models.Model):
    answer_haru = models.CharField(max_length=100)
    answer_number = models.IntegerField()
    right_ans = models.BooleanField()
    belongs_to = models.ForeignKey(
        MaEutaQuestionHo, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.answer_haru


class SabKoScore(models.Model):
    score_haru = models.IntegerField()

    def __str__(self):
        return self.answer_haru
