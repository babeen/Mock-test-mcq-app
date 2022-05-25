
from django.db import models

# Create your models here.


class MaEutaQuestionHo(models.Model):
    question_haru = models.CharField(max_length=200)
    question_num = models.IntegerField()

    def __str__(self):
        return self.question_haru + " | " + str(self.question_num)


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
    user_id = models.IntegerField()

    def __str__(self):
        return str(self.score_haru) + " | " + str(self.user_id)
